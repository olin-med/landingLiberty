import '../global.css';

export function PolicyText() {
  return (
    <div className="policy-text pdf-image-container flex justify-center items-center">
      <img
        src="/policy.jpg"
        alt="Document"
        className="w-full md:w-3/4 lg:w-1/2 h-auto"
      />
    </div>
  );
}
