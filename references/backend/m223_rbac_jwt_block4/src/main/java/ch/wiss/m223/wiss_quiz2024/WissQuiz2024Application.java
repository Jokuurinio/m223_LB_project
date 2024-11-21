package ch.wiss.m223.wiss_quiz2024;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.m223.wiss_quiz2024.model.ERole;
import ch.wiss.m223.wiss_quiz2024.model.Role;
import ch.wiss.m223.wiss_quiz2024.repositories.RoleRepository;

@RestController
@SpringBootApplication
public class WissQuiz2024Application implements CommandLineRunner{

	@Autowired
	RoleRepository roleRepository;

	public static void main(String[] args) {
		SpringApplication.run(WissQuiz2024Application.class, args);
	}

	@GetMapping("/")
	public ResponseEntity<List<String>> helloWorld(){
		List<String> demo = List.of("alpha", "beta", "gamma");
		return ResponseEntity.ok(demo);
	}

	@GetMapping("/private")
	public ResponseEntity<String> privateArea(){
		return ResponseEntity.ok("Geheim");
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		if (roleRepository.count() == 0) {
			roleRepository.save(new Role(ERole.ROLE_USER));
			roleRepository.save(new Role(ERole.ROLE_ADMIN));
		}
	}

}
