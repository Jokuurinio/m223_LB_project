package ch.wiss.m223.wiss_quiz2024.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ch.wiss.m223.wiss_quiz2024.model.ERole;
import ch.wiss.m223.wiss_quiz2024.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    	Optional<Role> findByName(ERole name);
}