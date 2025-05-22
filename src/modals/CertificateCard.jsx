import { IoEyeSharp } from "react-icons/io5";

function CertificateCard({title , issuedBy , imgSrc , imgAlt , completedOn , url}) {
  return (
   <div className="container certificate-card py-2">

    <div className="row  justify-content-center">
        <div className="col-12 col-lg-4">
            <img src={imgSrc} alt={imgAlt} className="card-img-top px-3" />
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column  justify-content-center">
            <h4 className="fs-4 fw-bold">
                {title}
            </h4>
            <h5 >
                Issued By : {issuedBy}
            </h5>
            <div className='d-flex justify-content-between align-items-center gap-3 pe-3'>
            <p className="mb-0">
                Completed on : {completedOn}
            </p>
            <a className="btn btn-resume text-light" href={url} target="_blank" title={title}>
                View <span></span> <IoEyeSharp size={20}/>
            </a>
            </div>
        </div>
    </div>
   </div>
  )
}

export default CertificateCard