package com.PiggyApi.persistence.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.cglib.core.Local;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer idUser;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "main_debit_account")
    private int mainDebitAccount;

    @Column(name = "date_created", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Timestamp dateCreated;
//
//    @OneToMany(mappedBy = "user")
//    private List<DebitAccount> debitAccounts;


    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getMainDebitAccount() {
        return mainDebitAccount;
    }

    public void setMainDebitAccount(int mainDebitAccount) {
        this.mainDebitAccount = mainDebitAccount;
    }

    public Timestamp getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Timestamp dateCreated) {
        this.dateCreated = dateCreated;
    }

//    public List<DebitAccount> getDebitAccounts() {
//        return debitAccounts;
//    }
//
//    public void setDebitAccounts(List<DebitAccount> debitAccounts) {
//        this.debitAccounts = debitAccounts;
//    }
}
