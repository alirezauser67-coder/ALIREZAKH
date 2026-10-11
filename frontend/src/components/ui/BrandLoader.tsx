interface BrandLoaderProps {
  text?: string;
  size?: number;
}

export default function BrandLoader({ text = 'Loading', size = 64 }: BrandLoaderProps) {
  return (
    <div className="brand-loader" role="status" aria-label={text}>
      <div className="brand-loader-rings" style={{ width: size, height: size }}>
        <div className="brand-loader-ring" />
        <div className="brand-loader-ring" />
        <div className="brand-loader-ring" />
        <div className="brand-loader-core" />
      </div>
      <span className="brand-loader-text">{text}</span>
    </div>
  );
}
