interface AboutScreenProps {
  pageTitle: string;
}

export function AboutScreen({ pageTitle }: AboutScreenProps) {
  return (
    <div className='d-flex justify-content-center'>
      <h1 className="mt-4 aj-text-red">{ pageTitle }</h1>
    </div>
  )
}