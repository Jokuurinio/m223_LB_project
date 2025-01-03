package ch.wiss.m223.hangman.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ch.wiss.m223.hangman.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
  Boolean existsByUsername(String username);
  Boolean existsByEmail(String email);
}