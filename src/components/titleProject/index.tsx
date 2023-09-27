type Props = {
  title: string,
  subtitle: string
}

export const TitleProject = ({ title, subtitle}: Props) => {
  return (
    <h1 className='text-xl sm:text-4xl flex items-center gap-2 uppercase font-bold justify-center py-4 text-center'>
      <p>
        {title}
        <span className='text-lime-500'>
          {subtitle}
        </span>
      </p>
    </h1>
  )
}