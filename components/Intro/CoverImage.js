import cn from "classnames";
export default function CoverImage({ title, src }) {
  return (
    <div className="-mx-5 sm:mx-0 sm:absolute sm:inset-x-0">
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        className="shadow-small"
      />
    </div>
  );
}
