package com.vbk.orderbook.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;

import com.vbk.orderbook.domain.enumeration.OperationType;

/**
 * A Position.
 */
@Entity
@Table(name = "position")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Position implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "asset", nullable = false)
    private String asset;

    @Column(name = "buy_at")
    private LocalDate buyAt;

    @Column(name = "sell_at")
    private LocalDate sellAt;

    @Column(name = "entry_value")
    private Double entryValue;

    @Column(name = "exit_value")
    private Double exitValue;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "operation_type", nullable = false)
    private OperationType operationType;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAsset() {
        return asset;
    }

    public Position asset(String asset) {
        this.asset = asset;
        return this;
    }

    public void setAsset(String asset) {
        this.asset = asset;
    }

    public LocalDate getBuyAt() {
        return buyAt;
    }

    public Position buyAt(LocalDate buyAt) {
        this.buyAt = buyAt;
        return this;
    }

    public void setBuyAt(LocalDate buyAt) {
        this.buyAt = buyAt;
    }

    public LocalDate getSellAt() {
        return sellAt;
    }

    public Position sellAt(LocalDate sellAt) {
        this.sellAt = sellAt;
        return this;
    }

    public void setSellAt(LocalDate sellAt) {
        this.sellAt = sellAt;
    }

    public Double getEntryValue() {
        return entryValue;
    }

    public Position entryValue(Double entryValue) {
        this.entryValue = entryValue;
        return this;
    }

    public void setEntryValue(Double entryValue) {
        this.entryValue = entryValue;
    }

    public Double getExitValue() {
        return exitValue;
    }

    public Position exitValue(Double exitValue) {
        this.exitValue = exitValue;
        return this;
    }

    public void setExitValue(Double exitValue) {
        this.exitValue = exitValue;
    }

    public OperationType getOperationType() {
        return operationType;
    }

    public Position operationType(OperationType operationType) {
        this.operationType = operationType;
        return this;
    }

    public void setOperationType(OperationType operationType) {
        this.operationType = operationType;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Position)) {
            return false;
        }
        return id != null && id.equals(((Position) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Position{" +
            "id=" + getId() +
            ", asset='" + getAsset() + "'" +
            ", buyAt='" + getBuyAt() + "'" +
            ", sellAt='" + getSellAt() + "'" +
            ", entryValue=" + getEntryValue() +
            ", exitValue=" + getExitValue() +
            ", operationType='" + getOperationType() + "'" +
            "}";
    }
}
