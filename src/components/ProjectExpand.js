import React, { useEffect } from 'react';

const ProjectExpand = ({ theme, open, setOpen }) => {
  const project = open?.project;

  useEffect(() => {
    const body = document.querySelector('body');
    if (open.state) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [open.state]);

  return (
    <div className={`modal fade ${open.state ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: open.state ? 'block' : 'none',transition: "display 0.5s ease" }}>
      <div className="modal-dialog modal-xl modal-dialog-centered" style={{ zIndex: 1000 }}>
        <div className={`modal-content ${open.state ? 'fade-in' : ''}`} style={{ backgroundColor: theme.card, color: theme.text_secondary, height: "100%", minHeight: "600px" }}>
          <div className="modal-header">
            <h3 className="modal-title">{project?.title}</h3>
            <button type="button" className="btn-close bg-light" onClick={() => setOpen({ state: false, project: null })}></button>
          </div>
          <div className="modal-body">
            <img src={project?.image} style={{width: "550px", maxWidth: "100%"}} alt="Project Image" />
            <p className='mt-2'>{project?.date}</p>
            <p>{project?.description}</p>

            <div className="d-flex flex-column flex-sm-row mt-5">
              <a href={project?.github} className="py-2 px-0 fw-bold text-decoration-none btn rounded-4 mb-3" style={{ width: "95%", maxWidth: "250px", color: theme.text_secondary, background: "transparent", border: "1.5px solid black", marginRight: "10px" }}>Source Code - Github</a>
              {project?.webapp != "null" && <a href={project?.webapp} className="py-2 px-0 fw-bold text-decoration-none btn rounded-4 mb-3" style={{ width: "95%", maxWidth: "250px", color: "white", background: "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)" }}>Live Demo</a>}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectExpand;
