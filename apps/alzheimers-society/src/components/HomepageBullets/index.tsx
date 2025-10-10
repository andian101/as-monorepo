import "./index.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const HomepageBullets = ({
  bullets
}: {
  bullets: Array<{ json: unknown }>;
}) => {
  return (
    <div className='content is-fullwidth-extended has-padding-horizontal'>
      <div className='is-fullwidth'>
        <div className='container' style={{ marginBottom: "2rem" }}>
          <div className='brand-flex-holder'>
            <div className='brand-flex-container'>
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className={`brand-flex-item ${
                    index === 1 ? "side-borders" : ""
                  }`}
                >
                  {documentToReactComponents(bullet.json)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
