import Representative from '../models/Representative';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'office-ui-fabric-react';

interface Props {
    data: Representative[]
}

const RapresentativesList = (props: Props) => {
    return (
        <Row className="people-list text-center">
            {props.data.map(x => 
                <Col xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3 col-persona">
                    {
                        ( () => { 
                            var primaryText : any; 
                            if (x.username !== "") primaryText = (<Link href={`https://t.me/${x.username}`}>{`${x.name ?? ""} ${x.surname ?? ""}`}</Link>); else { primaryText = `${x.name ?? ""} ${x.surname ?? ""}`}
                            return <Persona onRenderPrimaryText={() => primaryText} text={`${x.name ?? ""} ${x.surname ?? ""}`} secondaryText={x.cdl} size={PersonaSize.size40} />
                        })()
                    }
                </Col>
            )}
        </Row>
    )
};

export default RapresentativesList;