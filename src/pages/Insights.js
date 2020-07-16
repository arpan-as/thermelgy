import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

import { Row, Col, Card, CardHeader, CardBody, CardSubtitle,ButtonGroup, Button, CardText, Input } from 'reactstrap';

import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';

import Page from 'components/Page';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'Dataset 2',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'Dataset 3',
        backgroundColor: getColor('success'),
        borderColor: getColor('success'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
    ],
  };
};

const genPieData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
  };
};

const InsightsPage = () => {
  const [rSelected,setSelected] = useState(null)
  return (
    <Page title="Insights" breadcrumbs={[{ name: 'Insights', active: true }]}>
      {}
      <Card className="mb-3">
        <CardBody>
            {/* <CardSubtitle>Radio Buttons</CardSubtitle> */}
          <Row>
            <Col xl={6} lg={12} md={12} className="mb-sm-0 mb-4">
            <ButtonGroup>
                <Button
                color="primary"
                onClick={() => setSelected(1)}
                active={rSelected === 1}
                >
                Hourly
                </Button>
                <Button
                color="primary"
                onClick={() => setSelected(2)}
                active={rSelected === 2}
                >
                Daily
                </Button>
                <Button
                color="primary"
                onClick={() => setSelected(3)}
                active={rSelected === 3}
                >
                Monthly
                </Button>
                <Button
                color="primary"
                onClick={() => setSelected(4)}
                active={rSelected === 4}
                >
                Realtime
                </Button>
            </ButtonGroup>
            </Col>
            <Col xl={6} lg={12} md={12} className="d-flex justify-content-start justify-content-sm-end mb-0">
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              style={{width: 'max-content'}}
            />
            </Col>
            </Row>
            {/* <CardText>Selected: {rSelected}</CardText> */}
        </CardBody>
      </Card>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Bar</CardHeader>
            <CardBody>
              <Bar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Line</CardHeader>
            <CardBody>
              <Line data={genLineData({ fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Stacked Line</CardHeader>
            <CardBody>
              <Line
                data={genLineData()}
                options={{
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: 'Month',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Value',
                        },
                      },
                    ],
                  },
                }}
              />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Combo Bar / Line</CardHeader>
            <CardBody>
              <Bar data={genLineData({ type: 'line', fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Pie</CardHeader>
            <CardBody>
              <Pie data={genPieData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Doughnut</CardHeader>
            <CardBody>
              <Doughnut data={genPieData()} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Polar</CardHeader>
            <CardBody>
              <Polar data={genPieData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Radar</CardHeader>
            <CardBody>
              <Radar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default InsightsPage;
