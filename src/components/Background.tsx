import '@/styles/Background.css';
import AnimatedWave from '@/components/Wave';

export const Background = () => {
  return (
    <div className='background-effect'>
      <AnimatedWave smoothness={500}/>;
    </div>
  );
};
