import ClassNames from 'classnames';

export default function Container({ children, className }) {
  return <div className={ClassNames(`container mx-auto px-5 mb-5`, { [className]: !!className })}>{children}</div>
}