package com.PiggyApi.persistence.crud;

import com.PiggyApi.persistence.entity.DebitAccount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface DebitAccountCrudRepository extends CrudRepository<DebitAccount, Integer> {


    Optional<DebitAccount> findByIdAccount(int idAccount);

    List<DebitAccount> findByIdUser(int idUser);
}
