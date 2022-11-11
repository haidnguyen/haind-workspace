import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { useLayoutEffect, useRef } from 'react';
import { fragmentSource, vertexData, vertexSource } from '../../app/sources';

const texts = ['To', 'Phương', 'With ❤️'];
const morphTime = 1;
const cooldownTime = 0.25;

export default function LuvFeature() {
  const canvasRef = useRef<HTMLCanvasElement>();
  const text1Ref = useRef<HTMLSpanElement>();
  const text2Ref = useRef<HTMLSpanElement>();

  const execute = (canvas: HTMLCanvasElement) => {
    const compileShader = (shaderSource: string, shaderType: number) => {
      const shader = webgl.createShader(shaderType);
      webgl.shaderSource(shader, shaderSource);
      webgl.compileShader(shader);

      return shader;
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const webgl = canvas.getContext('webgl');
    let time = 0;
    let lastFrame = Date.now();
    let thisFrame: number;

    const program = webgl.createProgram();
    const vertexShader = compileShader(vertexSource, webgl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentSource, webgl.FRAGMENT_SHADER);
    const vertexDataBuffer = webgl.createBuffer();

    webgl.attachShader(program, vertexShader);
    webgl.attachShader(program, fragmentShader);
    webgl.linkProgram(program);
    webgl.useProgram(program);

    const positionHandle = webgl.getAttribLocation(program, 'position');
    const timeHandle = webgl.getUniformLocation(program, 'time');
    const widthHandle = webgl.getUniformLocation(program, 'width');
    const heightHandle = webgl.getUniformLocation(program, 'height');

    webgl.bindBuffer(webgl.ARRAY_BUFFER, vertexDataBuffer);
    webgl.bufferData(webgl.ARRAY_BUFFER, vertexData, webgl.STATIC_DRAW);
    webgl.enableVertexAttribArray(positionHandle);
    webgl.vertexAttribPointer(positionHandle, 2, webgl.FLOAT, false, 2 * 4, 0);
    webgl.uniform1f(widthHandle, window.innerWidth);
    webgl.uniform1f(heightHandle, window.innerHeight);

    const draw = () => {
      thisFrame = Date.now();
      time += (thisFrame - lastFrame) / 1000;
      lastFrame = thisFrame;

      webgl.uniform1f(timeHandle, time);
      webgl.drawArrays(webgl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(draw);
    };

    draw();
    return { widthHandle, heightHandle };
  };

  const onResize =
    (canvas: HTMLCanvasElement, widthHandle: WebGLUniformLocation, heightHandle: WebGLUniformLocation) => () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const webgl = canvas.getContext('webgl');

      webgl.viewport(0, 0, canvas.width, canvas.height);
      webgl.uniform1f(widthHandle, window.innerWidth);
      webgl.uniform1f(heightHandle, window.innerHeight);
    };

  useLayoutEffect(() => {
    const { widthHandle, heightHandle } = execute(canvasRef.current);

    const resizeFn = onResize(canvasRef.current, widthHandle, heightHandle);
    window.addEventListener('resize', resizeFn, false);
    resizeFn();

    return () => {
      window.removeEventListener('resize', resizeFn);
    };
  }, []);

  useLayoutEffect(() => {
    let textIndex = texts.length - 1;
    let time = Date.now();
    let morph = 0;
    let cooldown = cooldownTime;

    text1Ref.current.textContent = texts[textIndex % texts.length];
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];

    const setMorph = (fraction: number) => {
      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    };

    const doCooldown = () => {
      morph = 0;
      text2Ref.current.style.filter = '';
      text2Ref.current.style.opacity = '100%';
      text1Ref.current.style.filter = '';
      text1Ref.current.style.opacity = '0';
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    };

    const draw = () => {
      const newTime = Date.now();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }
        doMorph();
      } else {
        doCooldown();
      }
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return (
    <>
      <Head>
        <title>❤️</title>
      </Head>
      <Box
        bgColor='#000'
        w='100%'
        h='100vh'
        sx={{ '#filters': { display: 'none' } }}
        fontSize={{ base: '4pt', md: '16pt' }}
      >
        <canvas id='canvas' ref={canvasRef} />
        <Box
          position='absolute'
          top='-8px'
          bottom='0'
          w='full'
          filter='url(#threshold) blur(0.6px)'
          color='white'
          display='flex'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          sx={{
            span: {
              position: 'absolute',
              width: '100%',
              display: 'inline-block',
              fontSize: '3em',
              textAlgin: 'center',
              userSelect: 'none',
            },
          }}
        >
          <span ref={text1Ref}></span>
          <span ref={text2Ref}></span>
        </Box>
        <svg id='filters'>
          <defs>
            <filter id='threshold'>
              <feColorMatrix
                in='SourceGraphic'
                type='matrix'
                values='1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140'
              />
            </filter>
          </defs>
        </svg>
      </Box>
    </>
  );
}
