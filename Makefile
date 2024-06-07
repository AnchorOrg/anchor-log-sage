.PHONY: run-all-tests test-configuration-init

run-all-tests:
    python -m unittest discover -p '*_test.py'

test-configuration-init:
python -m unittest tests.config.configuration_test