
import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";


export default function Prototypes() {
    const prototypes = usePrototypes();
    const {addToOrder}= useActions();
    return (
        <main>
            <div className="prototypes">
               {prototypes.map(prototypes =>{
                const {id, thumbnail, title, price, desc, pieUrl} = prototypes;
                const click = () => {
                  addToOrder(id);
                }
                return (<div className="prototype"key={id}>
                  <a href={pieUrl} target="_BLANK">
                    <div style={{
                      padding: "25px 0 33px 0",
                    }
                    }>
                      <video
                      autoPlay
                      loop
                      playsInline
                      className="prototype__artwork prototype__edit"
                      src={thumbnail}
                      style={{
                        objectFit: "contain",
                      }}
                      />
                    </div>
                  </a>
                  <div className="prototype__body">
                    <div className="prototype__title">
                      <div className="btn btn--primary float--right" onClick={click}>
                        <i className="icon icon--plus"/>
                      </div>
                    </div>
``
                    {title}
                  </div>
                  <p className="prototype__price">$ {price}</p>
                  <p className="prototype__desc">{desc}</p>
                </div>
                );
               })
               }
            </div>
        </main>
    );
}

