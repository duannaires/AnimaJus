interface ContactScreenProps {
  pageTitle: string;
}

export function ContactScreen({ pageTitle }: ContactScreenProps) {
  return (
    <div className="container d-flex justify-content-center">
      <div className='col-6 p-3'>
        <div>
         <h1 className="mt-4 aj-text-red text-center">{ pageTitle }</h1>
        </div>
        <div>
          <form>
            <div className="form-group mb-3">
              <input type="text" className="form-control" id="exampleInputName" placeholder="Nome" />
            </div>
            <div className="form-group mb-3">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="E-mail" />
            </div>
            <div className="form-group mb-3">
              <input type="text" className="form-control" id="exampleInputSubject" placeholder="Assunto" />
            </div>
            <div className="form-group mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Mensagem"></textarea>
            </div>
            <button type="submit" className="btn aj-btn-red">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}