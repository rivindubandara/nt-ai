import { cn } from '~/utils/';

export default function GPTIcon({
  size = 25,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const imageUrl = '/client/public/assets/favicon-32x32.png';

  return (
    <img
      src={imageUrl}
      alt="Custom GPT Icon"
      width={size}
      height={size}
      className={cn(className, '')}
    />
  );
}
