import styled from "styled-components";
import cn from 'classnames';

export default function content({ title, className, children }) {
  return (
    <div className={cn(`max-w-lg`, {[className]: !!className})}>
      <h2 className="opacity-50 tracking-wide text-sm mb-5 uppercase">{title}</h2>
      <>{children}</>
    </div>
  )
}