import clsx from "clsx";

export default function Eclipse({...rest}) {
  return (
    <div className={clsx("aspect-square rounded-full border border-white opacity-10",rest?.className)}/>
  );
}
