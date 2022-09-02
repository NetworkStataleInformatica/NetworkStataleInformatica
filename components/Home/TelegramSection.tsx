import { Text, DefaultButton, IIconProps } from 'office-ui-fabric-react/lib-commonjs';
import { semibold } from '../../services/Fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const TelegramSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const buttonStyle = { maxWidth: 300, height: 40, borderRadius: 3, boxShadow: theme.effects.elevation8 };
    const buttonIconProps: IIconProps = { iconName: 'GoChevronRight', styles: { root: { fontSize: 14 } } };

    return (
        <div className="pb-4 pt-4" style={{ backgroundColor: theme.palette.themePrimary }}>
            <Container>
                <Row>
                    <Col lg={10} className="mb-2 center-mobile">
                        <div><Text variant="xLarge" styles={semibold} style={{color:theme.palette.white}}>{locale?.homepage.telegramText}</Text></div>
                    </Col>
                
                    <Col lg={2} className="text-right center-mobile">
                        <DefaultButton href="https://youtu.be/kgNxRZghkkA?t=133" text={locale?.homepage.telegramButton} iconProps={buttonIconProps} className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default TelegramSection;