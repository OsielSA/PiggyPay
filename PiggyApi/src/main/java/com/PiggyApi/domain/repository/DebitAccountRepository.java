package com.PiggyApi.domain.repository;

import com.PiggyApi.persistence.crud.DebitAccountCrudRepository;
import com.PiggyApi.persistence.entity.DebitAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class DebitAccountRepository {

    @Autowired
    private DebitAccountCrudRepository debitAccountCrudRepository;

    public List<DebitAccount> getAll(){
        return (List<DebitAccount>) debitAccountCrudRepository.findAll();
    }

    public List<DebitAccount> getByIdAccount(int idAccount){
        return debitAccountCrudRepository.findByIdAccount(idAccount);
    }
    public List<DebitAccount> getByIdUser(int idUser){
        return (List<DebitAccount>) debitAccountCrudRepository.findByIdUser(idUser);
    }
    public DebitAccount saveAccount(DebitAccount debitAccount){
        return debitAccountCrudRepository.save(debitAccount);
    }

    public void deleteDebitAccount(int idAccount){
        debitAccountCrudRepository.deleteById(idAccount);
    }

}
