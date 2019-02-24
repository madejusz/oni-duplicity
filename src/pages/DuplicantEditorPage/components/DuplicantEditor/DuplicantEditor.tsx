import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

import { Theme, createStyles, withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

import PageContainer from "@/components/PageContainer";

import DuplicantName from "./components/DuplicantName";
import DuplicantPortrait from "./components/DuplicantPortrait";
import ModifiersTab from "./components/ModifiersTab";
import IdentityTab from "./components/IdentityTab";
import EffectsTab from "./components/EffectsTab";
import TraitsTab from "./components/TraitsTab";
import AttributesTab from "./components/AttributesTab";
import AppearanceTab from "./components/AppearanceTab";

export interface DuplicantEditorProps {
  gameObjectId: number;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%"
    },
    divider: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    content: {
      display: "flex",
      flexDirection: "row"
    },
    tabContainer: {
      width: "100%",
      height: "100%",
      overflow: "auto",
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    }
  });

type Props = DuplicantEditorProps & WithTranslation & StyleProps<typeof styles>;
const DuplicantEditor: React.SFC<Props> = ({ classes, gameObjectId, t }) => {
  const [tab, setTab] = React.useState(0);
  return (
    <PageContainer title={t("duplicant-editor.title")}>
      <div className={classes.root}>
        <DuplicantName gameObjectId={gameObjectId} />
        <Divider className={classes.divider} />
        <DuplicantPortrait gameObjectId={gameObjectId} />
        <Paper elevation={0} square>
          <Tabs
            value={tab}
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            onChange={(_, value) => setTab(value)}
          >
            <Tab label="Identity" />
            <Tab label="Appearance" />
            <Tab label="Modifiers" />
            <Tab label="Effects" />
            <Tab label="Traits" />
            <Tab label="Attributes" />
          </Tabs>
        </Paper>
        <div className={classes.tabContainer}>
          {tab === 0 && <IdentityTab gameObjectId={gameObjectId} />}
          {tab === 1 && <AppearanceTab gameObjectId={gameObjectId} />}
          {tab === 2 && <ModifiersTab gameObjectId={gameObjectId} />}
          {tab === 3 && <EffectsTab gameObjectId={gameObjectId} />}
          {tab === 4 && <TraitsTab gameObjectId={gameObjectId} />}
          {tab === 5 && <AttributesTab gameObjectId={gameObjectId} />}
        </div>
      </div>
    </PageContainer>
  );
};

export default withStyles(styles)(withTranslation()(DuplicantEditor));
