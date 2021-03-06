package ru.ncedu.socialnetwork.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.ncedu.socialnetwork.domain.UserDAO;

@Repository
public interface UserRepository extends CrudRepository<UserDAO, Integer> {
    UserDAO findByLogin(String login);
}
