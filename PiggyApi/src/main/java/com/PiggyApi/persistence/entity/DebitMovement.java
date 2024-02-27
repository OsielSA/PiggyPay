package com.PiggyApi.persistence.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "debit_movements")
public class DebitMovement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_movement")
    private int idMovement;

    @Column(name = "id_account")
    private int idAccount;

    private float amount;

    @Column(name = "description_movement")
    private String  descriptionMovement;

    @Column(name = "type_movement")
    private boolean typeMovement;

    @Column(name = "date_movement")
    private Date dateMovement;

    @Column(name = "recorded_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @UpdateTimestamp
    private Timestamp recordedAt;

    public int getIdMovement() {
        return idMovement;
    }

    public void setIdMovement(int idMovement) {
        this.idMovement = idMovement;
    }

    public int getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(int idAccount) {
        this.idAccount = idAccount;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getDescriptionMovement() {
        return descriptionMovement;
    }

    public void setDescriptionMovement(String descriptionMovement) {
        this.descriptionMovement = descriptionMovement;
    }

    public boolean isTypeMovement() {
        return typeMovement;
    }

    public void setTypeMovement(boolean typeMovement) {
        this.typeMovement = typeMovement;
    }

    public Date getDateMovement() {
        return dateMovement;
    }

    public void setDateMovement(Date dateMovement) {
        this.dateMovement = dateMovement;
    }

    public Timestamp getRecordedAt() {
        return recordedAt;
    }

    public void setRecordedAt(Timestamp recordedAt) {
        this.recordedAt = recordedAt;
    }
}
