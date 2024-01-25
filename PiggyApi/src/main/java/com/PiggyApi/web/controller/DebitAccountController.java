package com.PiggyApi.web.controller;

import com.PiggyApi.domain.service.DebitAccountService;
import com.PiggyApi.persistence.entity.DebitAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
