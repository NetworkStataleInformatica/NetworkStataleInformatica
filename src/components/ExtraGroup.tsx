import { Text, Icon } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { FontWeights, ITextStyles, Persona } from '@fluentui/react';
import { Card, ICardTokens } from "@uifabric/react-cards";
import ExtraGroup from '../models/ExtraGroup'
import { useTheme } from '@fluentui/react-theme-provider';
import { ActionButton } from '@fluentui/react/lib/Button';
import { IIconProps } from '@fluentui/react';
import { redirectToLink } from '../services/Utils';
import Chip from '@material-ui/core/Chip';
import { semibold } from '../fonts';
import LocalizationService from "../services/LocalizationService";

initializeIcons();

interface Props { data: ExtraGroup };

const ExtraGroupView = (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string = LocalizationService.getLanguage();
    var data = props.data;
    const helpfulTextStyles: ITextStyles = { root: { fontWeight: FontWeights.regular, } };
    const descriptionTextStyles: ITextStyles = { root: { fontWeight: FontWeights.semibold } };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const telegramGroupIcon: IIconProps = { iconName: 'Send' };

    return (
        <Card tokens={cardTokens}>
            <Card.Item>
                {data.image === "" ? <Persona text={data.name![language]} onRenderPrimaryText={() => <Text styles={semibold}>{data.name}</Text>} /> : <Persona text={data.name![language]} onRenderPrimaryText={() => <Text styles={semibold}>{data.name}</Text>} imageUrl={ process.env.PUBLIC_URL + '/extra_groups_images/' + data.image } /> }
            </Card.Item>
            <Card.Section>
                <Text styles={descriptionTextStyles}>
                    <Chip label={locale.extraGroups.extraGroup} size="small" style={{ color: theme.palette.white, backgroundColor: theme.palette.orangeLighter }} className="m-1" />
                </Text>
                <Text variant="small" styles={helpfulTextStyles} className="mb-2">
                    <Icon iconName="Info" className="homeIcon" /> {data.description![language]}
                </Text>

                {
                    (() => {
                        if (data.gruppo !== "" && data.gruppo !== null) {
                            return (
                                <ActionButton
                                    onClick={() => redirectToLink(data.gruppo as any)}
                                    iconProps={telegramGroupIcon}
                                    style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '3px' }}
                                    disabled={data.gruppo === "" || data.gruppo === null}
                                    allowDisabledFocus>
                                    {locale.telegramGroup}
                                </ActionButton>
                            );
                        }
                    })()
                }

            </Card.Section>
        </Card>
    );
};

export default ExtraGroupView;