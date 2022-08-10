import { EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons';
import { Flex, Grid, GridItem, Icon, Text, VStack } from '@chakra-ui/react';
import { GitHub } from 'react-feather';
import { Skills } from './skills';
import { TimeSpanItem } from './time-span-item';

export function BlogFeatureCv() {
  return (
    <Flex
      bgGradient='linear(to-br, purple.600, pink.200)'
      minH='100vh'
      p={8}
      justify='center'
      fontFamily='Montserrat, sans-serif'
      sx={{
        '@media print': {
          padding: 0,
        },
      }}
    >
      <VStack bg='white' w='full' maxW='800px' spacing={4} align='stretch'>
        <Flex pt={6} px={6}>
          <Grid templateColumns='repeat(5, 1fr)' w='full'>
            <GridItem
              colSpan={3}
              display='flex'
              alignItems='flex-start'
              pos='relative'
              _before={{
                pos: 'absolute',
                content: '""',
                w: '164px',
                h: '132px',
                top: 0,
                left: '-12px',
                borderTop: '1px solid',
                borderColor: 'pink.200',
              }}
              _after={{
                pos: 'absolute',
                content: '""',
                w: 'full',
                h: '130px',
                top: '-12px',
                left: 0,
                borderLeft: '1px solid',
                borderColor: 'pink.200',
              }}
            >
              <VStack align='stretch' p={4}>
                <Text color='pink.600' fontSize='xl' fontWeight='semibold'>
                  Nguyen Dinh Hai
                </Text>
                <Text color='gray.600' fontSize='sm'>
                  Software Engineer
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={2} display='flex'>
              <VStack align='stretch' pt={4}>
                <Text color='gray.600' fontSize='sm' as='a' href='mailto:dinhhai281@gmail.com'>
                  <EmailIcon color='pink.600' mr={2} /> dinhhai281@gmail.com
                </Text>
                <Text color='gray.600' fontSize='sm' letterSpacing={1}>
                  <PhoneIcon color='pink.600' mr={2} /> (+84) 0886 511 763
                </Text>
                <Text color='gray.600' fontSize='sm' as='a' href='https://haidnguyen.dev' target='__blank'>
                  <LinkIcon color='pink.600' mr={2} /> haidnguyen.dev
                </Text>
                <Text color='gray.600' fontSize='sm' as='a' href='https://github.com/haidnguyen' target='__blank'>
                  <Icon as={GitHub} color='pink.600' mr={2} /> github.com/haidnguyen
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Flex>
        <VStack spacing={1} align='stretch' px={6}>
          <Text color='pink.600' fontWeight='semibold'>
            About me
          </Text>
          <Text color='gray.600' fontSize='sm'>
            I mostly do front-end development with React and Angular. While having a great passion for Functional
            Programming and Reactive Programming, I always try to apply that knowledge to deliver high-quality code and
            I never stop learning to make myself better every day.
          </Text>
        </VStack>
        <VStack
          spacing={1}
          align='stretch'
          px={6}
          pos='relative'
          _before={{
            pos: 'absolute',
            content: '""',
            w: '140px',
            h: '142px',
            bottom: '12px',
            right: '12px',
            borderBottom: '1px solid',
            borderColor: 'pink.200',
          }}
          _after={{
            pos: 'absolute',
            content: '""',
            w: '164px',
            h: '162px',
            bottom: 0,
            right: '24px',
            borderRight: '1px solid',
            borderColor: 'pink.200',
          }}
        >
          <Text color='pink.600' fontWeight='semibold'>
            Experience
          </Text>
          <VStack align='stretch' spacing={4}>
            <TimeSpanItem
              bulletColor='pink.400'
              lineColor='pink.400'
              organization='AnyManager'
              period='Jan 2022 - Present'
              title='Front-end Developer'
              tech='Angular, Typescript, rxjs, RxAngular, ...'
              description='Analyze and provide technical approach for implementing features. Improve report and data visualization performance.'
              url='anymanager.io'
              company='AnyMind Group'
              jobTitle='Senior Software Engineer'
            />
            <TimeSpanItem
              bulletColor='pink.400'
              lineColor='pink.400'
              organization='Retail IQ'
              period='Feb 2021 - Dec 2021'
              title='Front-end Developer'
              tech='Javascript, Typescript, React, Redux, Redux Saga, ...'
              description='Take care multiple products of Retail team at Tiki, refactor and improve existing front-end code base quality.'
              url='tiki.vn'
              company='Tiki Corporation'
              jobTitle='Senior Software Engineer'
            />
            <TimeSpanItem
              bulletColor='pink.400'
              lineColor='pink.400'
              organization='Katalon'
              period='Nov 2020 - Feb 2021'
              title='Fullstack Developer'
              tech='Typescript, Kotlin, React, Quarkus, Redux, Redux Toolkit, ...'
              description='Apply and share to team member about state management best practices for front-end, also implement features from back-end to front-end on a customer-facing license management web application.'
              url='katalon.com'
              company='KMS Technology'
              jobTitle='Senior Software Engineer'
            />
            <TimeSpanItem
              bulletColor='pink.400'
              lineColor='pink.400'
              organization='Elemica'
              period='Nov 2019 - Jan 2021'
              title='Front-end Developer'
              tech='Typescript, Angular, Ngrx, RxJS, ...'
              description='Review code and provide guidelines for front-end implementation, conduct technical sharing for the team about  Angular, Reactive Programming, State Management'
              url='elemica.com'
              company='KMS Technology'
              jobTitle='Senior Software Engineer'
            />
            <TimeSpanItem
              bulletColor='pink.400'
              lineColor='transparent'
              organization='Christinas'
              period='Aug 2019 - Nov 2019'
              title='Front-end Developer'
              tech='Javascript, React, Redux, ...'
              description='Implement feature base on design, work heavily on web animation.'
              url='christinas.vn'
              company='KMS Technology'
              jobTitle='Software Engineer'
              minimize
            />
          </VStack>
        </VStack>
        <Grid flexGrow={1} templateColumns='repeat(4, 1fr)' bgColor='pink.500' px={4} py={3} rowGap={2} mt={4}>
          <GridItem colSpan={2}>
            <Text color='whiteAlpha.900'>Skills</Text>
            <Skills
              items={[
                'Typescript',
                'Javascript',
                'HTML & CSS/SCSS/PostCSS',
                'React',
                'Angular',
                'Redux/NgRx',
                'RxJS',
                'Node.js',
              ]}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Text color='whiteAlpha.900'>Recognitions</Text>
            <Text fontSize='xs' color='whiteAlpha.900'>
              Become Trainer of Angular at KMS Technology Frontend Guild (2020)
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Text color='whiteAlpha.900'>Educations</Text>
            <Text fontSize='xs' color='whiteAlpha.900'>
              Bachelor of Software Engineering - GPA: 8.03
            </Text>
            <Text fontSize='xs' color='whiteAlpha.900'>
              University of Science Ho Chi Minh City
            </Text>
          </GridItem>

          <GridItem colSpan={1}>
            <Text color='whiteAlpha.900'>Languages</Text>
            <Text fontSize='xs' color='whiteAlpha.900'>
              English (Toeic 730 - 2019)
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text color='whiteAlpha.900'>Interests</Text>
            <Text fontSize='xs' color='whiteAlpha.900'>
              Cryptocurrency, Keyboard, Functional Programming
            </Text>
          </GridItem>
        </Grid>
      </VStack>
    </Flex>
  );
}

export default BlogFeatureCv;
