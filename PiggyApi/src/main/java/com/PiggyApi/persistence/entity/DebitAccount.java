package com.PiggyApi.persistence.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "debit_accounts")
public class DebitAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_account")
    private int idAccount;

    @Column(name = "id_user")
    private int idUser;

    @Column(name = "cardholder_name")
    private String cardholderName;

    @Column(name = "issuing_bank")
    private String issuingBank;

    @Column(name = "card_number")
    private String cardNumber;

    @Column(name = "allows_sections")
    private boolean allowsSections;

    @Column(name = "current_balance")
    private float currentBalance;

    @Column(name = "last_update_balance", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Timestamp lastUpdateBalance;

//    @ManyToOne
//    @JoinColumn(name = "id_user", insertable = false, updatable = false)
//    private User user;
//
//    @OneToMany(mappedBy = "debitAccount")
//    private List<DebitMovement> debitMovements;


    public int getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(int idAccount) {
        this.idAccount = idAccount;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getCardholderName() {
        return cardholderName;
    }

    public void setCardholderName(String cardholderName) {
        this.cardholderName = cardholderName;
    }

    public String getIssuingBank() {
        return issuingBank;
    }

    public void setIssuingBank(String issuingBank) {
        this.issuingBank = issuingBank;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public boolean isAllowsSections() {
        return allowsSections;
    }

    public void setAllowsSections(boolean allowsSections) {
        this.allowsSections = allowsSections;
    }

    public float getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(float currentBalance) {
        this.currentBalance = currentBalance;
    }

    public Timestamp getLastUpdateBalance() {
        return lastUpdateBalance;
    }

    public void setLastUpdateBalance(Timestamp lastUpdateBalance) {
        this.lastUpdateBalance = lastUpdateBalance;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
