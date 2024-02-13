package com.PiggyApi.web.controller;

import com.PiggyApi.domain.service.DebitAccountService;
import com.PiggyApi.persistence.entity.DebitAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/debit_account")
public class DebitAccountController {
    @Autowired
    private DebitAccountService debitAccountService;

    @GetMapping("/all")
    public ResponseEntity<List<DebitAccount>> getAll(){
        return new ResponseEntity<>(debitAccountService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/byUser/{id}")
    public ResponseEntity<List<DebitAccount>> getAccountsByIdUser(@PathVariable("id") int idUser){
        return new ResponseEntity<>(debitAccountService.getAccountsByIdUser(idUser), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<DebitAccount> saveAccount(@RequestBody DebitAccount debitAccount){
        return new ResponseEntity<>(debitAccountService.saveAccount(debitAccount), HttpStatus.CREATED);
    }

    @PutMapping("/update/{idAccount}")
    public ResponseEntity<List<DebitAccount>> updateAccount(@PathVariable("idAccount") int idAccount, @RequestBody DebitAccount updatedAccount) {
        List<DebitAccount> existingAccountOptional = debitAccountService.getAccountByIdAccount(idAccount);

        if (!existingAccountOptional.isEmpty()) {
            updatedAccount.setIdAccount(idAccount);
            debitAccountService.saveAccount(updatedAccount);
            return new ResponseEntity<>(debitAccountService.getAccountByIdAccount(idAccount), HttpStatus.OK);
        }

        return new ResponseEntity<>(existingAccountOptional, HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteDebitAccount(@PathVariable("id") int idAccount){
        return new ResponseEntity(debitAccountService.deleteDebitAccount(idAccount) ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }
}
