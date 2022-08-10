import dynamic from 'next/dynamic';

export default dynamic(() => import('@haind-workspace/blog/feature-cv').then(m => m.BlogFeatureCv), { ssr: false });
