interface ContactScreenProps {
  pageTitle: string;
}

export function ContactScreen({ pageTitle }: ContactScreenProps) {
  return (
    <div className='d-flex justify-content-center'>
      <h1 className="mt-4 aj-text-red">{ pageTitle }</h1>
    </div>
  )
}