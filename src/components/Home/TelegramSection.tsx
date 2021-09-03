import { Text, DefaultButton, Icon } from '@fluentui/react';
import { semibold } from '../../services/fonts';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTheme } from '@fluentui/react-theme-provider';
import LocalizationService from "../../services/LocalizationService";

const TelegramSection = () => {
    var theme = useTheme();
    const locale = LocalizationService.strings();

    const buttonStyle = { maxWidth: 300, height: 40, borderRadius: 3 };
    //const buttonIconProps: IIconProps = { iconName: 'ChevronRightSmall', styles: { root: { fontSize: 12 } } };

    return (
        <div className="pb-4 pt-4" style={{ backgroundColor: theme.palette.themePrimary }}>
            <Container>
                <Row>
                    <Col lg={10} className="mb-2 center-mobile">
                        <div><Text variant="xLarge" styles={semibold} style={{color:theme.palette.white}}>Telegram è un'app di messaggistica molto più potente e sicura di WhatsApp.</Text></div>
                    </Col>
                
                    <Col lg={2} className="text-right">
                        <DefaultButton text="Dimmi di più" /* iconProps={buttonIconProps} */ className="text-decoration-none" allowDisabledFocus style={buttonStyle} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default TelegramSection;