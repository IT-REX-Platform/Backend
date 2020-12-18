package com.vbk.orderbook.service.dto;

import java.io.Serializable;
import java.util.Objects;
import io.github.jhipster.service.Criteria;
import com.vbk.orderbook.domain.enumeration.OperationType;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;
import io.github.jhipster.service.filter.LocalDateFilter;

/**
 * Criteria class for the {@link com.vbk.orderbook.domain.Position} entity. This class is used
 * in {@link com.vbk.orderbook.web.rest.PositionResource} to receive all the possible filtering options from
 * the Http GET request parameters.
 * For example the following could be a valid request:
 * {@code /positions?id.greaterThan=5&attr1.contains=something&attr2.specified=false}
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class PositionCriteria implements Serializable, Criteria {
    /**
     * Class for filtering OperationType
     */
    public static class OperationTypeFilter extends Filter<OperationType> {

        public OperationTypeFilter() {
        }

        public OperationTypeFilter(OperationTypeFilter filter) {
            super(filter);
        }

        @Override
        public OperationTypeFilter copy() {
            return new OperationTypeFilter(this);
        }

    }

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private StringFilter asset;

    private LocalDateFilter buyAt;

    private LocalDateFilter sellAt;

    private DoubleFilter entryValue;

    private DoubleFilter exitValue;

    private OperationTypeFilter operationType;

    public PositionCriteria() {
    }

    public PositionCriteria(PositionCriteria other) {
        this.id = other.id == null ? null : other.id.copy();
        this.asset = other.asset == null ? null : other.asset.copy();
        this.buyAt = other.buyAt == null ? null : other.buyAt.copy();
        this.sellAt = other.sellAt == null ? null : other.sellAt.copy();
        this.entryValue = other.entryValue == null ? null : other.entryValue.copy();
        this.exitValue = other.exitValue == null ? null : other.exitValue.copy();
        this.operationType = other.operationType == null ? null : other.operationType.copy();
    }

    @Override
    public PositionCriteria copy() {
        return new PositionCriteria(this);
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public StringFilter getAsset() {
        return asset;
    }

    public void setAsset(StringFilter asset) {
        this.asset = asset;
    }

    public LocalDateFilter getBuyAt() {
        return buyAt;
    }

    public void setBuyAt(LocalDateFilter buyAt) {
        this.buyAt = buyAt;
    }

    public LocalDateFilter getSellAt() {
        return sellAt;
    }

    public void setSellAt(LocalDateFilter sellAt) {
        this.sellAt = sellAt;
    }

    public DoubleFilter getEntryValue() {
        return entryValue;
    }

    public void setEntryValue(DoubleFilter entryValue) {
        this.entryValue = entryValue;
    }

    public DoubleFilter getExitValue() {
        return exitValue;
    }

    public void setExitValue(DoubleFilter exitValue) {
        this.exitValue = exitValue;
    }

    public OperationTypeFilter getOperationType() {
        return operationType;
    }

    public void setOperationType(OperationTypeFilter operationType) {
        this.operationType = operationType;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final PositionCriteria that = (PositionCriteria) o;
        return
            Objects.equals(id, that.id) &&
            Objects.equals(asset, that.asset) &&
            Objects.equals(buyAt, that.buyAt) &&
            Objects.equals(sellAt, that.sellAt) &&
            Objects.equals(entryValue, that.entryValue) &&
            Objects.equals(exitValue, that.exitValue) &&
            Objects.equals(operationType, that.operationType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
        id,
        asset,
        buyAt,
        sellAt,
        entryValue,
        exitValue,
        operationType
        );
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PositionCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (asset != null ? "asset=" + asset + ", " : "") +
                (buyAt != null ? "buyAt=" + buyAt + ", " : "") +
                (sellAt != null ? "sellAt=" + sellAt + ", " : "") +
                (entryValue != null ? "entryValue=" + entryValue + ", " : "") +
                (exitValue != null ? "exitValue=" + exitValue + ", " : "") +
                (operationType != null ? "operationType=" + operationType + ", " : "") +
            "}";
    }

}
