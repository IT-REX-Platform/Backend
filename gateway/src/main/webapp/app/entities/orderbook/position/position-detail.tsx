import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './position.reducer';
import { IPosition } from 'app/shared/model/orderbook/position.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPositionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PositionDetail = (props: IPositionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { positionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Position [<b>{positionEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="asset">Asset</span>
          </dt>
          <dd>{positionEntity.asset}</dd>
          <dt>
            <span id="buyAt">Buy At</span>
          </dt>
          <dd>{positionEntity.buyAt ? <TextFormat value={positionEntity.buyAt} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="sellAt">Sell At</span>
          </dt>
          <dd>{positionEntity.sellAt ? <TextFormat value={positionEntity.sellAt} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="entryValue">Entry Value</span>
          </dt>
          <dd>{positionEntity.entryValue}</dd>
          <dt>
            <span id="exitValue">Exit Value</span>
          </dt>
          <dd>{positionEntity.exitValue}</dd>
          <dt>
            <span id="operationType">Operation Type</span>
          </dt>
          <dd>{positionEntity.operationType}</dd>
        </dl>
        <Button tag={Link} to="/position" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/position/${positionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ position }: IRootState) => ({
  positionEntity: position.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PositionDetail);
