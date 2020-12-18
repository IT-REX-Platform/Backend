import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './position.reducer';
import { IPosition } from 'app/shared/model/orderbook/position.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPositionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Position = (props: IPositionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { positionList, match, loading } = props;
  return (
    <div>
      <h2 id="position-heading">
        Positions
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Position
        </Link>
      </h2>
      <div className="table-responsive">
        {positionList && positionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Asset</th>
                <th>Buy At</th>
                <th>Sell At</th>
                <th>Entry Value</th>
                <th>Exit Value</th>
                <th>Operation Type</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {positionList.map((position, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${position.id}`} color="link" size="sm">
                      {position.id}
                    </Button>
                  </td>
                  <td>{position.asset}</td>
                  <td>{position.buyAt ? <TextFormat type="date" value={position.buyAt} format={APP_LOCAL_DATE_FORMAT} /> : null}</td>
                  <td>{position.sellAt ? <TextFormat type="date" value={position.sellAt} format={APP_LOCAL_DATE_FORMAT} /> : null}</td>
                  <td>{position.entryValue}</td>
                  <td>{position.exitValue}</td>
                  <td>{position.operationType}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${position.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${position.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${position.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Positions found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ position }: IRootState) => ({
  positionList: position.entities,
  loading: position.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Position);
