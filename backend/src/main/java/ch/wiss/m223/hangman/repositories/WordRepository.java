package ch.wiss.m223.hangman.repositories;
import org.springframework.data.repository.CrudRepository;

import ch.wiss.m223.hangman.model.Word;


public interface WordRepository extends CrudRepository<Word, Long> {
    
}
