import React, { Component } from 'react';
import { ButtonGroup, ButtonIcon, Button, Grid, GridCell, Tabset, Tab } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent codesandboxUrl="https://codesandbox.io/embed/2j00ryzn7n?autoresize=1&codemirror=1&hidenavigation=1">
        <Tabset>
          <Tab title="Showcase">
            <Grid>
              <GridCell>
                <DocumentationShowCase centered>
                  <ButtonGroup space="x2" textBreak="none" textCenter>
                    <Button size="small" style="primary">Primary</Button>
                    <Button size="small" style="secondary">Secondary</Button>
                    <Button size="small" style="tertiary">Tertiary</Button>
                    <Button size="small" style="quaternary">Quaternary</Button>
                  </ButtonGroup>
                </DocumentationShowCase>

                <DocumentationShowCase centered>
                  <ButtonGroup space="x2">
                    <Button size="small">small</Button>
                    <Button size="small">small</Button>
                    <Button size="small">small</Button>
                  </ButtonGroup>

                  <ButtonGroup space="x2">
                    <Button size="medium">medium</Button>
                    <Button size="medium">medium</Button>
                    <Button size="medium">medium</Button>
                  </ButtonGroup>

                  <ButtonGroup space="x2">
                    <Button size="large">large</Button>
                    <Button size="large">large</Button>
                    <Button size="large">large</Button>
                  </ButtonGroup>
                </DocumentationShowCase>
              </GridCell>

              <GridCell>
                <DocumentationShowCase centered>
                  <ButtonGroup space="x2" textCenter>
                    <Button color="accent">Accent</Button>
                    <Button color="positive">Positive</Button>
                    <Button color="negative">Negative</Button>
                  </ButtonGroup>
                </DocumentationShowCase>

                <DocumentationShowCase centered>
                  <ButtonGroup space="x2" textCenter>
                    <Button shape="circle" size="medium">1</Button>
                    <Button shape="circle" size="medium">B</Button>
                    <Button shape="circle" size="medium">
                      <ButtonIcon name="twitter" />
                    </Button>
                  </ButtonGroup>

                  <ButtonGroup space="x2" textCenter>
                    <Button shape="stadium" size="small">10</Button>
                    <Button shape="stadium" size="small">100</Button>
                    <Button shape="stadium" size="small">1000</Button>
                  </ButtonGroup>
                </DocumentationShowCase>
              </GridCell>
            </Grid>
          </Tab>
          <Tab title="Sandbox">
            <Grid>
              <GridCell full>
                <iframe
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    src="https://codesandbox.io/embed/2j00ryzn7n?autoresize=1&codemirror=1&hidenavigation=1&fontsize=11"
                    style={ { width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' } }>
                </iframe>
              </GridCell>
            </Grid>
          </Tab>
        </Tabset>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Button/Button'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Button/ButtonGroup'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Button/ButtonIcon'),
        ] } />
      </DocumentationContent>
    );
  }
}
