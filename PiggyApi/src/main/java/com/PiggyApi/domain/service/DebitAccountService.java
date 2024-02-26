package com.PiggyApi.domain.service;

import com.PiggyApi.domain.repository.DebitAccountRepository;
import com.PiggyApi.persistence.entity.DebitAccount;
import com.PiggyApi.persistence.entity.DebitMovement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class DebitAccountService {

    @Autowired
    private DebitAccountRepository debitAccountRepository;

    public List<DebitAccount> getAll(){
        return debitAccountRepository.getAll();
    }

    public List<DebitAccount> getAccountByIdAccount(int idAccount){
        return debitAccountRepository.getByIdAccount(idAccount);
    }
    public List<DebitAccount> getAccountsByIdUser(int idUser){
        return debitAccountRepository.getByIdUser(idUser);
    }

    public DebitAccount saveAccount(DebitAccount debitAccount){
        return debitAccountRepository.saveAccount(debitAccount);
    }
    public boolean deleteDebitAccount(int idAccount){
        debitAccountRepository.deleteDebitAccount(idAccount);
        List<DebitAccount> account = getAccountByIdAccount(idAccount);
        if(account.isEmpty())
            return true;
        return false;
    }
    public void updateCurrentBalance(DebitMovement debitMovement){
        List<DebitAccount> debitAccounts = debitAccountRepository.getByIdAccount(debitMovement.getIdAccount());
        Iterator iter = debitAccounts.iterator();
        DebitAccount debitAccount = (DebitAccount) iter.next();
        float currentBalance = debitAccount.getCurrentBalance();
        if (!debitMovement.isTypeMovement())
            debitMovement.setAmount(debitMovement.getAmount() * -1);

        currentBalance += debitMovement.getAmount();
        debitAccount.setCurrentBalance(currentBalance);

        debitAccountRepository.saveAccount(debitAccount);
    }
}
