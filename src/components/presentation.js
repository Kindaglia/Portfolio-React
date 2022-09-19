
import profile from './img/profilePhoto.png';
import gitLogo from './img/github_logo.png';
import linkedinLogo from './img/Linkedin_logo.png';





function Presentation() {
    return (
        <div className="container-lg text-white my-5">
            <div className="row ">
                <div className="col text-center  border-bottom primary">
                    <h1 >Matteo Drago</h1>
                </div>
            </div>
            <div className="row my-3 " >
                <div className="col-md-4 ">

                <img  className="mg-fluid  rounded-pill w-75 "roundedCircle  src={profile} alt="BigCo Inc. logo" />
                
                </div>
                
                <div className="col-md-8 ">
                    {/* colore da scegleire */}
                    <p className="">
                    La mia passione fin da piccolo è stata l'informatica, ho cominciato da piccolo montando vecchi computer. Successivamente mi sono appassionato 
                    sempre di più anche al lato software quindi mi sono avvicinato alla programmazione e tale passione non si è mai spenta.
                    </p>
                    <p>
                        In questo pagina ho voluto inserire dei progetti realizzati durante il mio corso di studi presso ITS e anche extra.
                    </p>
                    
                    {/* Social Link */}
                    <div className="row my-3 " > 

                    {/* GitHub */}
                    <a href="https://github.com/Kindaglia" target="_blank" style={{width: 70, height: 'auto'}} rel="noreferrer" >
                    <img className="mg-fluid  rounded-circle p-1" 
                        src={gitLogo} alt="logo" 
                        style={{width: 70, height: 'auto'}}/>
                    </a>

                     {/* Linkedin */}
                    <a href="https://linkedin.com/in/matteo-drago-312461235" target="_blank" style={{width: 70, height: 'auto'}} rel="noreferrer" >
                    <img className="mg-fluid  rounded-circle p-1" 
                        src={linkedinLogo} alt="logo" 
                        style={{width: 80, height: 'auto'}}/>
                    </a>

                    </div>
                
                </div>


            </div>
            
        </div>
    );
  }
  
  export default Presentation;
  