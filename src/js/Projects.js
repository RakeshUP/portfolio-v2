import React from 'react';
import Fade from 'react-reveal/Fade';
import refUtil from '../util/refUtil';
import openLink from '../images/openLink.svg';

const isMobile = () => window.innerWidth <= 768;

const Description = props => {
  return (
    <>
      <h3 style={{ color: '#444444' }}>
        DESCRIPTION
      </h3>
      <div>
        {React.Children.map(props.children, element => {
          if (element.props.type === 'Description') {
            return React.createElement('div', { style: { paddingBottom: "1vh" } }, element.props.children)
          }
        })
        }
      </div>
    </>
  )
};

const Tags = props => {
  return (
    <>
      <h3 style={{ color: '#444444' }}>
        TAGS
      </h3>
      <div>
        {React.Children.map(props.children, element => {
          if (element.props.type === 'Tags') {
            return React.createElement('div', { style: { paddingBottom: "1vh" } }, element.props.children)
          }
        })
        }
      </div>
    </>
  );
};

const Projects = props => {
  let ref = React.createRef();
  refUtil.push(ref);
  return (
    <div className="Projects" ref={ref} style={props.position % 2 === 0 ? { backgroundColor: '#f8f8f8' } : {}}>
      <Fade bottom>
        <h1 className="project-heading">
          <a href={props.Link} target="_blank" rel="nofollow noopener noreferrer">
            {props.Heading}
          </a>
          <img className="openLink" src={openLink} alt="openLink"></img>
        </h1>
        <div className="project-tagline">
          {props.TagLine}
        </div>
      </Fade>
      <div className="project-flex">
        {props.position % 2 === 0 || isMobile() ? <>
          <div className="project-image">
            <img className={`image ${props.className}`} alt={props.alt} src={props.src} />
          </div>
          <Fade bottom>
            <div className="project-desc">
              <div className="summary">
                <Description>
                  {props.children}
                </Description>
                <Tags>
                  {props.children}
                </Tags>
              </div >
            </div>
          </Fade>
        </> : <>
            <Fade bottom>
              <div className="project-desc">
                <div className="summary">
                  <Description>
                    {props.children}
                  </Description>
                  <Tags>
                    {props.children}
                  </Tags>
                </div >
              </div>
            </Fade>
            <div className="project-image">
              <img className={`image ${props.className}`} alt={props.alt} src={props.src} />
            </div>
          </>
        }
      </div>
    </div>
  );
};

Projects.Description = Description;

export default Projects;
