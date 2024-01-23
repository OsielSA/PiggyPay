package com.PiggyApi.Models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_user;
    private String user_name;
    private String first_name;
    private String last_name;
    private int main_debit_account;
    private Timestamp date_created;


    public User() {
    }

    public User(int id_user, String user_name, String first_name, String last_name, int main_debit_account, Timestamp date_created) {
        this.id_user = id_user;
        this.user_name = user_name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.main_debit_account = main_debit_account;
        this.date_created = date_created;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public int getMain_debit_account() {
        return main_debit_account;
    }

    public void setMain_debit_account(int main_debit_account) {
        this.main_debit_account = main_debit_account;
    }

    public Timestamp getDate_created() {
        return date_created;
    }

    public void setDate_created(Timestamp date_created) {
        this.date_created = date_created;
    }
}
