import dynamic from 'next/dynamic';

export default dynamic(() => import('@haind-workspace/blog/feature-home').then(m => m.BlogFeatureHome));
