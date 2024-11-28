package ch.wiss.m223.hangman;

import ch.wiss.m223.hangman.controller.WordController;
import ch.wiss.m223.hangman.model.Word;
import ch.wiss.m223.hangman.repositories.RoleRepository;
import ch.wiss.m223.hangman.repositories.WordRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = WordController.class)
@Import(TestSecurityConfig.class)
class WordControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WordRepository wordRepository;

    @MockBean
    private RoleRepository roleRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"}) // Benutzer mit ADMIN-Rolle
    void testCreateWord() throws Exception {
        // Testdaten vorbereiten
        Word newWord = new Word();
        newWord.setWord("testWord");

        Word savedWord = new Word();
        savedWord.setId(1L);
        savedWord.setWord("testWord");

        // Mocking des Repositories
        when(wordRepository.save(Mockito.any(Word.class))).thenReturn(savedWord);

        // HTTP POST-Request simulieren und Ergebnisse prüfen
        mockMvc.perform(post("/words")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(newWord)))
                .andExpect(status().isCreated()) // HTTP 201 erwartet
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.word").value("testWord"));

        // Verifizieren, dass das Repository genutzt wurde
        verify(wordRepository, times(1)).save(Mockito.any(Word.class));
    }

    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"}) // Benutzer mit ADMIN-Rolle
    void testDeleteWord() throws Exception {
        // Mocking des Repositories
        doNothing().when(wordRepository).deleteById(1L);

        // HTTP DELETE-Request simulieren und Ergebnisse prüfen
        mockMvc.perform(delete("/words/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()); // HTTP 200 erwartet

        // Verifizieren, dass das Repository genutzt wurde
        verify(wordRepository, times(1)).deleteById(1L);
    }
}
