import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './position.reducer';
import { IPosition } from 'app/shared/model/orderbook/position.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPositionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PositionUpdate = (props: IPositionUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { positionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/position');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...positionEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gatewayApp.orderbookPosition.home.createOrEditLabel">Create or edit a Position</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : positionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="position-id">ID</Label>
                  <AvInput id="position-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="assetLabel" for="position-asset">
                  Asset
                </Label>
                <AvField
                  id="position-asset"
                  type="text"
                  name="asset"
                  validate={{
                    required: { value: true, errorMessage: 'This field is required.' },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="buyAtLabel" for="position-buyAt">
                  Buy At
                </Label>
                <AvField id="position-buyAt" type="date" className="form-control" name="buyAt" />
              </AvGroup>
              <AvGroup>
                <Label id="sellAtLabel" for="position-sellAt">
                  Sell At
                </Label>
                <AvField id="position-sellAt" type="date" className="form-control" name="sellAt" />
              </AvGroup>
              <AvGroup>
                <Label id="entryValueLabel" for="position-entryValue">
                  Entry Value
                </Label>
                <AvField id="position-entryValue" type="string" className="form-control" name="entryValue" />
              </AvGroup>
              <AvGroup>
                <Label id="exitValueLabel" for="position-exitValue">
                  Exit Value
                </Label>
                <AvField id="position-exitValue" type="string" className="form-control" name="exitValue" />
              </AvGroup>
              <AvGroup>
                <Label id="operationTypeLabel" for="position-operationType">
                  Operation Type
                </Label>
                <AvInput
                  id="position-operationType"
                  type="select"
                  className="form-control"
                  name="operationType"
                  value={(!isNew && positionEntity.operationType) || 'SHORT'}
                >
                  <option value="SHORT">SHORT</option>
                  <option value="LONG">LONG</option>
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/position" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  positionEntity: storeState.position.entity,
  loading: storeState.position.loading,
  updating: storeState.position.updating,
  updateSuccess: storeState.position.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PositionUpdate);
