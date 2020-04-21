export default function media({ size = "2x", className, color }) {
  const sizes = {
    xs: 'fa-xs',
    sm: 'fa-sm',
    lg: 'fa-lg',
    '2x': 'fa-2x',
    '3x': 'fa-3x',
    '5x': 'fa-5x',
    '7x': 'fa-7x',
    '10x': 'fa-10x'
  };

  return (
    <div className={`${className} flex items-center text-${color}`}>
      <a className="px-2 py-2 cursor-pointer">
        <i className={`fab fa-instagram ${sizes[size]}`}/>
      </a>
      <a className="px-2 py-2 cursor-pointer"> 
        <i className={`fab fa-facebook-square ${sizes[size]}`}/>
      </a>
      <a className="px-2 py-2 cursor-pointer">
        <i className={`fab fa-youtube ${sizes[size]}`}/>
      </a>
    </div>
  );
}
