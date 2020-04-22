import classNames from 'classnames';

export default function media({ size = "2x", color }) {
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
    <div className={`flex items-center text-${color} hidden sm:block`}>
      <a className="px-3 py-2 cursor-pointer">
        <i className={`fab fa-instagram ${sizes[size]}`}/>
      </a>
      <a className="px-3 py-2 cursor-pointer"> 
        <i className={`fab fa-facebook-f ${sizes[size]}`}/>
      </a>
      <a className="px-3 py-2 cursor-pointer">
        <i className={`fab fa-youtube ${sizes[size]}`}/>
      </a>
    </div>
  );
}
