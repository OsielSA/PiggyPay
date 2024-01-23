package com.PiggyApi.persistence.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private int idUser;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "main_debit_account")
    private int mainDebitAccount;

    @Column(name = "date_created")
    private Timestamp dateCreated;

    @OneToMany(mappedBy = "user")
    private List<DebitAccount> debitAccounts;
}
