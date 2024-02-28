package com.PiggyApi.domain.repository;

import com.PiggyApi.persistence.crud.DebitAccountCrudRepository;
import com.PiggyApi.persistence.entity.DebitAccount;
import com.PiggyApi.persistence.entity.DebitMovement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class DebitAccountRepository {

    @Autowired
    private DebitAccountCrudRepository debitAccountCrudRepository;

    public List<DebitAccount> getAll(){
        return (List<DebitAccount>) debitAccountCrudRepository.findAll();
    }

    public List<DebitAccount> getByIdAccount(int idAccount){
        List<DebitAccount> debitAccounts = debitAccountCrudRepository.findByIdAccount(idAccount);
        debitAccounts = debitAccounts.stream().sorted(Comparator.comparing(DebitAccount::getIssuingBank).reversed()).collect(Collectors.toList());
        return debitAccounts;
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
